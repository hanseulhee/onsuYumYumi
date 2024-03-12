import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <p>헉 .. 페이지를 찾을 수 없어요.</p>
      <Link to="/">메인으로 돌아가기</Link>
    </div>
  );
}

export default NotFound;
