export const useTwoLinesTitle = (title: string | undefined) => {
  if (title && typeof title === "string") {
    const s = title.split(" ");

    if (s.length > 1) {
      s.splice(Math.floor(s.length / 2), 0, "<br>");

      return <span dangerouslySetInnerHTML={{ __html: s.join(" ") }} />;
    } else {
      return <span dangerouslySetInnerHTML={{ __html: s + "<br>&nbsp;" }} />;
    }
  } else {
    return <span dangerouslySetInnerHTML={{ __html: "<br>&nbsp;" }} />;
  }
};
