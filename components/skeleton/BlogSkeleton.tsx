import { Skeleton } from "@mantine/core";
import s from "./BlogSkeleton.module.scss";

const BlogSkeleton = () => {
  const skeletonOrder = [
    "skeleton__big",
    "skeleton__small",
    "skeleton__small",
    "skeleton__big",
    "skeleton__big",
    "skeleton__small",
  ];

  return (
    <div className={s.box}>
      <div className={s.background}>
        <div className={s.container}>
          <div className={s.skeleton__cards}>
            {skeletonOrder.map((className, index) => (
              <Skeleton key={index} className={s[className]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
