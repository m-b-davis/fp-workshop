// () -> '2-5-1-9-5'
// Do not edit!
function createCommentID() {
  const r = () => Math.floor(Math.random() * 10);
  return [r(), r(), r(), r(), r()].join('-');
}


// Solution

const commentList = document.querySelector('.comment-list');

function createCommentElement(userID, comment, commentID) {
  const props = {
    commentID,
    userID, // pass user ID in
    text: comment,
  };

  const element = createElement(props);

  // Return element so surrounding scope is not mutated
  return element;
}


const commentID = createCommentID();
const comment = addComment(30, 'My first comment!', commentID);

commentList.appendChild(comment);



