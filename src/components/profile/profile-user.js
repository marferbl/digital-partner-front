import { useTranslation } from "react-i18next";

export const ProfileUser = ({ me }) => {

    const { t } = useTranslation("global");

    return (
        <>
            <div className="flex items-center justify-center w-full min-h-80 rounded-lg" >
                <span className='text-center font-light text-neutral w-1/2'>
                    {t('profileUser.legend')}
                </span>
            </div >
        </>
    );
}