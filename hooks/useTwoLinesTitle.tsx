export const useTwoLinesTitle = (title: string) => {
  const s = title.split(" ");

  if (s.length > 1) {
    // Add '<br>' into the center:
    s.splice(Math.floor(s.length / 2), 0, "<br>");

    // Here is your result. Update HTML tag:
    return <span dangerouslySetInnerHTML={{ __html: s.join(" ") }} />;
  } else {
    return <span dangerouslySetInnerHTML={{ __html: s + "<br>&nbsp;" }} />;
  }
};

