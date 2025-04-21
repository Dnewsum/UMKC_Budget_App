
    export default function HeroMockup() {
    return (
        <section >
        <div className="relative mx-auto w-full max-w-4xl">
            {/* 1. Your laptop mockup */}
            <img
            src="/laptopEmpty.png"
            alt="Laptop mockup"
            className="w-full block"
            />

            {/* 2. Looping video, absolutely positioned */}
            <video
            src="/Demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="
                absolute
                /* adjust these to fit your blank screen */
                top-[5.5%] left-[16.1%] 
                w-[70%] h-[71%]
                object-cover
                rounded-sm
            "
            />
        </div>
        </section>
    );
    }
