import Image from 'next/image';

export default function Section({
  text,
  bg,
  textColor = '#0061FF',
}: {
  text: string;
  bg: string;
  textColor?: string;
}) {
  return (
    <div
      className="h-screen flex flex-col justify-between p-20"
      style={{ backgroundColor: bg, color: textColor }}
    >
      <div className="text-5xl font-bold max-w-xl">{text}</div>
      <Image src="/dropbox-icon.svg" alt="Dropbox Icon" width={40} height={40} />
    </div>
  );
}
