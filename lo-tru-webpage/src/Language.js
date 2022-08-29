import { useContext } from "react";
import { Button } from "react-bootstrap";
import i18n from "./i18n";
import { useTranslation } from 'react-i18next';
import LocaleContext from "./LocaleContext";


function LanguageButton () {
    const {locale} = useContext(LocaleContext);

    function changeLocale (l) {
        if (locale !== l) {
            i18n.changeLanguage(l);
        }       
    }


    return <div className="custom-sticky-top-right">{
    locale === "en" ? 
    <Button variant="light" onClick={() => changeLocale('it')}>ITA</Button> : 
    <Button variant="light" onClick={() => changeLocale('en')}>ENG</Button>}
    </div>
}

function Title() {
	const { t } = useTranslation();
	return (
		<h2>{t('engineer')}</h2>
	);
}

function Description() {
	const { t } = useTranslation();
	return (
		<p>
			{t('description')}
		</p>
	)
}

function Bachelor() {
	const { t } = useTranslation();
	return (
		<div className="my-4 mx-2">
			<p>
				{t('bachelor')}</p>
		</div>
	);
}

function Master() {
	const { t } = useTranslation();
	return (
		<div className="my-4 mx-2">
			<p>
				{t('master')}
			</p>
		</div>
	)
}

export {LanguageButton, Title, Description, Bachelor, Master};