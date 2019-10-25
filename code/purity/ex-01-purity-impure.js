// () -> '2-5-1-9-5'
// Do not edit!
function createCommentID() {
  const r = () => Math.floor(Math.random() * 10);
  return [r(), r(), r(), r(), r()].join('-');
}

// Excercise - refactor to a pure function

// It's ok to change the return type of the function
// Assume createElement() is already a pure function

const commentList = document.querySelector('.comment-list');

function createCommentElement(userID, comment) {
  const props = {
    commentID: createCommentID(),
    userID,
    text: comment,
  };

  const element = createElement(props);
  commentList.appendChild(element);
}

addComment(30, 'My first comment!');
