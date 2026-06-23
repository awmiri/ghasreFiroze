"use client";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import ToolsInputText from "@/components/tools/ui/input";
import ToolsInputText1 from "@/components/tools/ui/ToolsInputText";
import {EyeIcon, EyeOffIcon, MailIcon, SearchIcon} from "lucide-react";

export default function Home() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        city: "",
        message: "",
    });

    const [selectedCity, setSelectedCity] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("فرم ارسال شد:", {...formData, city: selectedCity});
        alert("فرم با موفقیت ارسال شد!");
    };
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [search, setSearch] = useState("")
    const [username, setUsername] = useState("")
    const [comment, setComment] = useState("")






    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="p-8">
                    {/* هدر فرم */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            فرم تماس با ما
                        </h2>
                        <p className="text-gray-600">
                            لطفاً اطلاعات خود را وارد کنید
                        </p>
                    </div>

                    {/* فرم */}
                    <form onSubmit={handleSubmit} className="space-y-6 ">
                        {/* فیلد نام */}
                        <ToolsInputText
                            type="text"
                            value={formData.name}
                            title="نام و نام خانوادگی"
                            placeholder="علی محمدی"
                            onChange={(e) => setFormData({...formData, name: e})}
                            required={true}
                        />
                        {/*// 1. ساده (مثل قبل)*/}
                        <ToolsInputText1
                            value={name}
                            onChange={setName}
                            title="نام کاربری"
                            placeholder="علی محمدی"
                            required
                            type="text"

                        />

                        {/*// 2. با آیکون*/}
                        <ToolsInputText1
                            value={email}
                            onChange={setEmail}
                            label="ایمیل"
                            placeholder="example@email.com"
                            type="email"
                            icon={<MailIcon className="w-4 h-4" />}
                            iconPosition="right"
                            onClickIcon={()=>{alert("asd")}}
                        />

                        {/*// 3. با خطا و راهنما*/}
                        <ToolsInputText1
                            value={password}
                            onChange={setPassword}
                            label="رمز عبور"
                            icon={!showPassword?<EyeIcon className="w-4 h-4" />:<EyeOffIcon className="w-4 h-4" />}
                            iconPosition="right"
                            onClickIcon={()=>{setShowPassword(!showPassword)}}
                            type={showPassword?"text":"password"}
                            // error="رمز عبور باید حداقل ۸ کاراکتر باشد"
                            hint="از حروف بزرگ و کوچک استفاده کنید"
                            direction={"ltr"}
                        />

                        {/*// 4. سایز بزرگ و مدل outline*/}
                        <ToolsInputText1
                            value={search}
                            onChange={setSearch}
                            placeholder="جستجو..."
                            size="lg"
                            variant="outline"
                            icon={<SearchIcon className="w-5 h-5" />}
                            iconPosition="left"
                        />

                        {/*// 5. مدل flushed (بدون حاشیه)*/}
                        <ToolsInputText1
                            value={username}
                            onChange={setUsername}
                            label="نام کاربری"
                            variant="flushed"
                            placeholder="username"
                        />

                        {/*// 6. با استایل سفارشی کامل*/}
                        <ToolsInputText1
                            value={comment}
                            onChange={setComment}
                            label="نظر شما"
                            placeholder="نظر خود را بنویسید..."
                            size="lg"
                            variant="outline"
                            containerClassName="mb-6"
                            labelClassName="text-blue-600 font-bold"
                            inputClassName="rounded-xl bg-blue-50"
                            hint="نظر شما بعد از تایید نمایش داده می‌شود"
                        />

                        {/*// 7. با استفاده از ref*/}
                        {/*const inputRef = useRef<HTMLInputElement>(null);*/}
                        {/*<ToolsInputText1*/}
                        {/*    ref={inputRef}*/}
                        {/*    value={code}*/}
                        {/*    onChange={setCode}*/}
                        {/*    placeholder="کد تایید"*/}
                        {/*    maxLength={6}*/}
                        {/*/>*/}


                        {/* فیلد ایمیل */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                ایمیل
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        {/* Dropdown شهر با کامپوننت shadcn */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                شهر محل سکونت
                            </label>
                            <Select onValueChange={setSelectedCity}>
                                <SelectTrigger className="w-full border-gray-300">
                                    <SelectValue placeholder="شهر خود را انتخاب کنید"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="tehran">تهران</SelectItem>
                                    <SelectItem value="mashhad">مشهد</SelectItem>
                                    <SelectItem value="isfahan">اصفهان</SelectItem>
                                    <SelectItem value="shiraz">شیراز</SelectItem>
                                    <SelectItem value="tabriz">تبریز</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* فیلد پیام */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                پیام شما
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                                placeholder="پیام خود را بنویسید..."
                                required
                            />
                        </div>

                        {/* دکمه ارسال */}
                        <Button
                            type="submit"
                            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md transition-colors"
                        >
                            ارسال فرم
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}