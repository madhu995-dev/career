import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{t("welcome")}</h1>
    </div>
  );
};

export default Home;
