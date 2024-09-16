const brands = [
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/27fe565e66e2fb6d5c1efa43f7725990ee6e828d6dd01d005709e052883cd9a1?placeholderIfAbsent=true&apiKey=e34b0bbc442149bfa463a424862e236a",
        alt: "Corporate Client Logo 1",
        className: "aspect-[3.16] w-[95px]",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/82e477c1f3a7dcd69044923e0cf189e23dd232b245775ded6cd01aa1118be21b?placeholderIfAbsent=true&apiKey=e34b0bbc442149bfa463a424862e236a",
        alt: "Corporate Client Logo 2",
        className: "aspect-[5.75] w-[132px]",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/147593ed17df9b4025228b1a754fed99e3d58e5dc33ef3d0982df1a86358bbea?placeholderIfAbsent=true&apiKey=e34b0bbc442149bfa463a424862e236a",
        alt: "Corporate Client Logo 3",
        className: "aspect-[4.26] w-[102px]",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6fe6e31e3ccf6ab52813133bebe50e8ea51b26a2f53a968eb11da6e9e96ea21?placeholderIfAbsent=true&apiKey=e34b0bbc442149bfa463a424862e236a",
        alt: "Corporate Client Logo 4",
        className: "aspect-[1.98] w-[95px]",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/817707e795fee712750ef46cfd7a8d897dfa7df4caadaf295db1a1a92ecf90ec?placeholderIfAbsent=true&apiKey=e34b0bbc442149bfa463a424862e236a",
        alt: "Corporate Client Logo 5",
        className: "w-8 aspect-[0.5]",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/82e477c1f3a7dcd69044923e0cf189e23dd232b245775ded6cd01aa1118be21b?placeholderIfAbsent=true&apiKey=e34b0bbc442149bfa463a424862e236a",
        alt: "Corporate Client Logo 6",
        className: "aspect-[5.75] w-[132px]",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b68b583043fa051e88fe6bd8b905dd5fe949974b596e954a5ece42a9e8ae962?placeholderIfAbsent=true&apiKey=e34b0bbc442149bfa463a424862e236a",
        alt: "Corporate Client Logo 7",
        className: "aspect-[2.09] w-[94px]",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/02153c6dc15d950fcb284f342e41c7adfbd4b0850d0a0e96598608f470d0ed05?placeholderIfAbsent=true&apiKey=e34b0bbc442149bfa463a424862e236a",
        alt: "Corporate Client Logo 8",
        className: "aspect-[3.34] w-[97px]",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/44707075e29bad15add1ab4870c5848b1b2dfaecef6c3bc89934915c87bbc75a?placeholderIfAbsent=true&apiKey=e34b0bbc442149bfa463a424862e236a",
        alt: "Corporate Client Logo 9",
        className: "aspect-[2.65] w-[98px]",
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e4eea9409df806ad06e4dab5e64efc6251ee13096a3c9a107377b5f85efe23f?placeholderIfAbsent=true&apiKey=e34b0bbc442149bfa463a424862e236a",
        alt: "Corporate Client Logo 10",
        className: "aspect-[3.16] w-[95px]",
    },
];

export default function Brands() {
    return (
        <div className="w-full px-4 py-[50px]">
            <section className="pb-5 dark:bg-dark">
                <div className="container px-4">
                    <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11">
                        {brands.map((brand, i) => (
                            <div key={i} className="mx-4">
                                <img
                                    src={brand.src}
                                    alt={brand.alt}
                                    className={brand.className}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
