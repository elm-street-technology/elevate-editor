import React from "react";
import draftToHtml from "draftjs-to-html";

const Wysiwyg = ({ value }) => {
  const convertedHTML = draftToHtml(value);
  return <div dangerouslySetInnerHTML={{ __html: convertedHTML }} />;
};

export default Wysiwyg;
