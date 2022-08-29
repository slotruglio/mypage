import { useContext } from "react";
import { Button, Stack, ButtonGroup, ToggleButton } from "react-bootstrap";
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

function ScrollText() {
	const { t } = useTranslation();
	return (
		<div className="text-center">
			<p>{t('scroll')}</p>
			<i class="bi bi-chevron-double-down custom-arrow"></i>
		</div>
	)
}

export {LanguageButton, Title, Description, Bachelor, Master, ScrollText};