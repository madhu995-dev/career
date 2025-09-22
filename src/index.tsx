	import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-6">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        {t("welcome")}
      </h1>
      <p className="text-lg md:text-2xl mb-8 text-center max-w-2xl">
        {t("hero_subtitle")}
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Button className="bg-white text-indigo-600 hover:bg-gray-100">
          {t("get_started")}
        </Button>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
          {t("learn_more")}
        </Button>
      </div>
    </div>
  );
};

export default Index;
