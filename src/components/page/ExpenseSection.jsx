import Image from "next/image";

export default function ExpenseSection() {
    return (
        <section className="bg-[#0C0F1F] text-white py-10 px-4">
            <div className="w-[60%] max-[640px]:w-[100%] sm:w-[90%] md:w-[80%] lg:w-[60%] mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-14">
                    Effortless expenses for <br className="hidden md:block" />
                    <span className="text-white">employees (and managers).</span>
                </h2>

                {/* Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 text-left items-start justify-center">
                    {/* Left Card */}
                    <div className="flex flex-col items-center ">
                        <div className="bg-[#E7EDF6] rounded-xl mb-4 p-4 max-w-sm overflow-hidden h-96">
                            <Image
                                src="/img/card2.png" // Use actual path
                                alt="Receipt WhatsApp"
                                width={250}
                                height={300}
                                className="mx-auto object-cover object-top h-[500px]"
                            />
                        </div>
                        <h3 className="text-base max-w-sm px-4 md:text-lg font-semibold mb-2 text-center md:text-left">
                            Don&apos;t worry about storing receipts
                        </h3>
                        <p className="text-gray-300 max-w-sm px-4 text-sm leading-relaxed text-center md:text-left">
                            After each transaction, StrideIQ instantly prompts, collects, and matches receipts on behalf of your employees through WhatsApp, email.
                        </p>
                    </div>

                    {/* Right Card */}
                    <div className="flex flex-col items-center ">
                        <div className="bg-[#E7EDF6] rounded-xl mb-4 max-w-sm overflow-hidden h-96">
                            <Image
                                src="/img/expenses-img.png" // Use actual path
                                alt="Receipt WhatsApp"
                                width={450}
                                height={300}
                                className="mx-auto object-cover object-top h-[500px]"
                            />
                        </div>
                        <h3 className="text-base max-w-sm md:-ml-20 md:text-lg font-semibold mb-2 text-center md:text-left">
                            Just tap the card and pay
                        </h3>
                        <p className="text-gray-300 max-w-sm px-4 text-sm leading-relaxed text-center md:text-left">
                            No more out-of-pocket spends. No more month-end reimbursement stress. No more chasing receipts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
