// import from node modules
import { useContext } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
// import from custom libraries
import i18n from "../i18n";
import LocaleContext from "../LocaleContext";

function LanguageButton () {
    const {locale} = useContext(LocaleContext);

    function changeLocale (l) {
        if (locale !== l) {
            i18n.changeLanguage(l);
        }       
    }

	const radios = [
		{ name: 'EN', value: 'en' },
		{ name: 'IT', value: 'it' },
	];


    return <div className="custom-sticky-top-right">
		<ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={locale === radio.value ? 'light' : 'dark'}
            name="radio"
            value={radio.value}
			size="sm"
            checked={locale === radio.value}
            onChange={(e) => changeLocale(radio.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
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

function TextBox(props) {
	const { t } = useTranslation();
	return (
		<div className="my-4 mx-2">
			<p>
				{t(props.text)} {props.link ? <a href={props.link} className="App-link" target="_blank" rel="noreferrer">Link</a> : <></>}</p>
		</div>
	);
}

function ScrollText() {
	const { t } = useTranslation();
	return (
		<div className="text-center">
			<p>{t('scroll')}</p>
			<i className="bi bi-chevron-double-down custom-arrow"></i>
		</div>
	)
}

export {LanguageButton, Title, Description, TextBox, ScrollText};