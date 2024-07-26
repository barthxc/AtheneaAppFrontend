import type { ReactNode } from "react";
import { Spinner } from "./ui";

interface LoadingViewProps {
  isLoading: boolean;
  children: ReactNode;
  skeleton?: ReactNode;
}

const LoadingView = ({ isLoading, children, skeleton }: LoadingViewProps) => {
  if (isLoading && skeleton) return skeleton;
  if (isLoading) return <Spinner />;

  return <>{children}</>;
};

export default LoadingView;
