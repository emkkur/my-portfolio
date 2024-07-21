import { MotionValue } from "framer-motion";

export interface PageProps {
  height: number
}

export interface PageScrollProps extends PageProps {
  progress: MotionValue<number>
}