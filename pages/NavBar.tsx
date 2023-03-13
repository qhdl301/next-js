import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter(); // 라우터이 Location, history 정보를 가지고 있다.

  return (
    <nav>
      <Link href="/">
        <div>HOME</div>
      </Link>
      <Link href="/about">
        <div>ABOUT</div>
      </Link>
    </nav>
  );
};

export default NavBar;
