import Link from "next/link";

const Logo = ({ url = "/", text = false }) => {
  return (
    <Link href={url}>
      <a className="sitelogo py-2">
        <span className="text-4xl font-bold uppercase leading-none text-primary">
          Web Dev
        </span>
      </a>
    </Link>
  );
};

export default Logo;
