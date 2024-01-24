const useFramerAnimations = (
  animationType:
    | "default"
    | "lowYMove"
    | "lowDelay"
    | "partnersDelay" = "default"
) => {
  const defaultAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
      delay: 1,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      delay: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const lowYMove = {
    hidden: {
      y: 50,
      opacity: 0,
      delay: 1,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      delay: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const lowDelay = {
    hidden: {
      y: 100,
      opacity: 0,
      delay: 1,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      delay: 1,
      transition: { delay: custom * 0.1 },
    }),
  };

  const partnersDelay = {
    hidden: {
      y: 100,
      opacity: 0,
      delay: 1,
      transition: { delay: 1 },
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      delay: 1,
      transition: { delay: custom * 0.05 },
    }),
  };

  switch (animationType) {
    case "lowYMove":
      return lowYMove;
    case "lowDelay":
      return lowDelay;
    case "partnersDelay":
      return partnersDelay;
    default:
      return defaultAnimation;
  }
};

export default useFramerAnimations;
