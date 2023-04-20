/* Comments counter */
const CommentsCounter = (counter, link) => {
  link.innerHTML = `Comments (${counter})`;
  return counter;
};

export default CommentsCounter;
