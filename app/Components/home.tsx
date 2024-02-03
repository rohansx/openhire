import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Welcome to OpenHire</h1>
      <Link href="/interview">Start Interview</Link>
    </div>
  );
};

export default Home;
