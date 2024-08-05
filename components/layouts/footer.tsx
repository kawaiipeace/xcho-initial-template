import { getTranslation } from '@/i18n';

const { t, i18n } = getTranslation();
const Footer = () => {
    return (
            <div className="p-6 pt-0 mt-auto text-center dark:text-white-dark ltr:sm:text-left rtl:sm:text-right">© {new Date().getFullYear()}. {t('ระบบจัดการแบบฟอร์ม (XCHO) สงวนลิขสิทธิ์ พัฒนาโดย ฝพจ.')}</div>
    );
};

export default Footer;
