export function detectCollision(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;

  let topOfGameObj = gameObject.position.y;
  let leftOfGameObj = gameObject.position.x;
  let rightOfGameObj = gameObject.position.x + gameObject.width;
  let bottomOfGameObj = gameObject.position.y + gameObject.height;

  if (
    bottomOfBall >= topOfGameObj &&
    topOfBall <= bottomOfGameObj &&
    ball.position.x >= leftOfGameObj &&
    ball.position.x + ball.size <= rightOfGameObj
  ) {
    return true;
  } else {
    return false;
  }
}
