> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Redesign blogoverzicht van grrr.tech
Het herontwerpen van de grrr.tech blog pagina. 

<img width="700" alt="Scherm­afbeelding 2024-01-24 om 23 14 35" src="https://github.com/zainablfz/the-startup-responsive-interactieve-website/assets/144009548/d65c2036-f39e-415d-979d-6ae573a93593">


## Inhoudsopgave

* Opdrachtgever
* Ontwerpprobleem/ oplossing
* Gebruik van de website
* Belangrijke onderdelen
* Checklist gelukt/niet gelukt

## Opdrachtgever

De opdrachtgever is Martijn Nieuwenhuizen van GRRR. GRRR is een creatief digitaal bureau gevestigd in Amsterdam. Het bedrijf is gespecialiseerd in het leveren van digitale oplossingen, waaronder webdesign, digitale strategie, branding en andere creatieve diensten. GRRR werkt vaak samen met klanten uit verschillende sectoren om innovatieve en effectieve digitale ervaringen te creëren. Zij hanteren een aantal principes, namelijk: toegankelijkheid, progressive enhancement en automatisering. 

## Ontwerpprobleem en oplossing

Het probleem was al vrij snel bekend, namelijk dat het huidige ontwerp saai is. Terwijl de content juist goed en interessant is! Tijdens het ontwerpen ben ik op een oplossing gekomen. Ik heb bedacht om een blog timeline te maken, met animaties wanneer je op de pagina komt en de background. 

## Gebruik van de website

Zoals boven vermeld, wanneer de pagina wordt ingeladen komt de timeline tevoorschijn. Hier staat de titel en de beschrijving, eronder staat een button met een link naar de volledige blog. Bovendien staat er in de navigation een 'subscribe' button, wat dient om aan te melden voor de maandelijkse nieuwsbrief om up-to-date gehouden te worden over de blogs. 

## Kenmerken met technische opzet en belangrijke onderdelen

Ik ben mobile first te werk gegaan, dit betekent dat al mijn code eerst voor small screen is gecodeerd. Ik heb dan voor de `media query` breakpoints gebruikt voor tablet (medium) en/of laptop (large) screen. 

### JavaScript

Ik heb JavaScript gebruikt voor de interactie met de button en de modal. 

``` JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector(".modal");
    const confirmed = document.querySelector(".confirmed");
    const overlay = document.querySelector(".overlay");
    const closeModalBtns = document.querySelectorAll(".btn-close");

    const openModal = function () {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    };

    const openConfirmedModal = function () {
      modal.classList.add("hidden");
      confirmed.classList.remove("hidden");
    };

    const closeModal = function () {
      modal.classList.add("hidden");
      confirmed.classList.add("hidden");
      overlay.classList.add("hidden");
    };

    closeModalBtns.forEach(function (btn) {
      btn.addEventListener("click", closeModal);
    });

    overlay.addEventListener("click", closeModal);

    const openModalBtns = document.querySelectorAll(".btn-open");
    openModalBtns.forEach(function (btn) {
      btn.addEventListener("click", openModal);
    });

    const submitBtn = document.querySelector(".submit");
    submitBtn.addEventListener("click", openConfirmedModal);
  });

```

## Checklist wel/niet gelukt


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

