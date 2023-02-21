import React, { useMemo } from "react";
import { useDrop } from "react-dnd";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/config";
import { ItemType } from "../../types/global";

type Props = {
  children: React.ReactNode;
  name: string;
  id: string;
};

const TaskBox = ({ children, name, id }: Props) => {
  const [colorText, colorBg, icon] = useMemo(() => {
    let text, bg, icon;
    if (id === "1") {
      text = "text-blue-500";
      bg = "bg-blue-200";
      icon = "🌞";
    } else if (id === "2") {
      text = "text-orange-500";
      bg = "bg-orange-200";
      icon = "📝";
    } else if (id === "3") {
      text = "text-red-500";
      bg = "bg-red-200";
      icon = "⏳";
    } else {
      text = "text-green-500";
      bg = "bg-green-200";
      icon = "✅";
    }
    return [text, bg, icon];
  }, [id]);

  const { statuses } = useSelector((state: RootState) => state.statusReducer);

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemType.BOX,
    drop: () => ({ statusName: name, statusId: id }),
    canDrop: (item: any, monitor) => {
      // console.log("item canDrop", item);
      const itemIndex = statuses.findIndex(
        (si) => si.statusId === item.statusId
      );
      const statusIndex = statuses.findIndex((si) => si.statusName === name);
      return [
        itemIndex + 1,
        itemIndex - 1,
        itemIndex + 2,
        itemIndex - 2,
        itemIndex,
      ].includes(statusIndex);
    },
    hover: (item, monitor) => {
      // console.log("itemcanDrop", item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  // const isActive = isOver && canDrop;
  // console.log("isOver", isOver);
  // console.log("canDrop", canDrop);

  return (
    <div
      ref={drop}
      className={`${
        canDrop ? "bg-error" : "bg-[rgba(9,30,66,0.04)]"
      }flex flex-col w-80 min-w-[280px] rounded-lg bg-[rgba(9,30,66,0.04)]`}
    >
      <div className={` ${colorBg} rounded px-3 py-1 flex items-center`}>
        <span
          className={`text-lg px-3 pt-3 pb-1 font-semibold ${colorText} leading-tight font-mono`}
        >
          {name + icon}
        </span>
      </div>
      <div className="flex-1 min-h-0">
        <ul className="pt-1 pb-3 px-3">{children}</ul>
      </div>
    </div>
  );
};

export default TaskBox;
