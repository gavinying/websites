import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => (
  <div className="w-full py-20" id="footers">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl">
              Footers
            </h2>
            <p className="max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg">
              Footer to add at the bottom of your website.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Link href="blocks/footers/footer1" className="hover:opacity-70">
            <div className="flex flex-col gap-2">
              <div className="rounded-md bg-muted p-8 lg:p-20">
                <Image
                  src="/footer1.png"
                  alt="footer1"
                  width={3600}
                  height={1972}
                  layout="responsive"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
