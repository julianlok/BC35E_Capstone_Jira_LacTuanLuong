import React from "react";
import logo from "../../assets/img/logo.png";
import ellipse from "../../assets/img/Ellipse.png";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../components/common/ErrorComponent/ErrorComponent";
type Props = {
  heading: string;
  children: JSX.Element | React.ReactNode;
};

const FormTemplate = (props: Props) => {
  const { heading, children } = props;
  return (
    <div className="relative w-full min-h-screen p-10 bg-lite dark:bg-darkbg isolate">
      <img
        src={ellipse}
        alt="bg"
        className="hidden lg:block absolute bottom-0 right-0 left-0 pointer-events-none z-[-1] "
      />
      <div className="flex items-center justify-centerp-5 gap-x-5 text-2xl text-primary font-bold ">
        <img srcSet={`${logo} 2x`} alt="..." className="w-full max-w-[70px]" />
        <span className="hidden lg:inline-block">Monkey Jira</span>
      </div>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default withErrorBoundary(FormTemplate, {
  FallbackComponent: ErrorComponent,
});
