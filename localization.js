// Define the language reload anchors
    var language = {
            eng: {
                textAboutMenu: "About",
                textTeamMenu: "Team",
                textDonationMenu: "Donation",
                textSupportMenu: "Support",
                textViewCountdown: "View Countdown",
                textHeader: "The official Litecoin mobile Wallet",
                textPharagraph: "Litecoin has been operational since 2011 with no downtime! Litewallet is the official wallet backed by Litecoin Foundation that offers simple and safe ways to use Litecoin."
            },
            id: {
                textAboutMenu: "Tentang",
                textTeamMenu: "Tim",
                textDonationMenu: "Donasi",
                textSupportMenu: "Dukung Kami",
                textViewCountdown: "Lihat hitungan mundur",
                textHeader: "Dompet Litecoin resmi untuk Smartphone",
                textPharagraph: "Litecoin telah beroperasi sejak 2011 tanpa downtime! Litewallet adalah dompet resmi yang didukung oleh Litecoin Foundation yang menawarkan cara sederhana dan aman untuk menggunakan Litecoin."

            },
            fr: {
                textAboutMenu: "À propos",
                textTeamMenu: "Équipe",
                textDonationMenu: "la donation",
                textSupportMenu: "soutien",
                textViewCountdown: "Afficher le compte à rebours",
                textHeader: "Le portefeuille mobile Litecoin officiel",
                textPharagraph: "Litecoin est opérationnel depuis 2011 sans temps d'arrêt ! Litewallet est le portefeuille officiel soutenu par la Fondation Litecoin qui offre des moyens simples et sûrs d'utiliser Litecoin."

            }
        };


        if (window.location.hash) {
                if(window.location.hash === "#en"){
                    document.querySelector(".selected").innerText = "English";
                    textAboutMenu.textContent  = language.eng.textAboutMenu;
                    textTeamMenu.textContent = language.eng.textTeamMenu;
                    textDonationMenu.textContent = language.eng.textDonationMenu;
                    textSupportMenu.textContent = language.eng.textSupportMenu;
                    viewCountdown.textContent = language.eng.textViewCountdown;
                    about.textContent = language.eng.textHeader;
                    aboutLitewallet.textContent = language.eng.textPharagraph;
                }
                else if(window.location.hash === "#id") {
                    document.querySelector(".selected").innerText = "Bahasa Indonesia";
                    textAboutMenu.textContent  = language.id.textAboutMenu;
                    textTeamMenu.textContent = language.id.textTeamMenu;
                    textDonationMenu.textContent = language.id.textDonationMenu;
                    textSupportMenu.textContent = language.id.textSupportMenu;
                    viewCountdown.textContent = language.id.textViewCountdown;
                    about.textContent = language.id.textHeader;
                    aboutLitewallet.textContent = language.id.textPharagraph;
                }
                else if (window.location.hash === "#fr") {
                    document.querySelector(".selected").innerText = "Française";
                    textAboutMenu.textContent = language.fr.textAboutMenu;
                    textTeamMenu.textContent = language.fr.textTeamMenu;
                    textDonationMenu.textContent = language.fr.textDonationMenu;
                    textSupportMenu.textContent = language.fr.textSupportMenu;
                    viewCountdown.textContent = language.fr.textViewCountdown;
                    about.textContent = language.fr.textHeader;
                    aboutLitewallet.textContent = language.fr.textPharagraph;
                }
            }

        // get all dropdowns
        const dropdownItems = document.querySelectorAll('.dropdown');

        // iterate all dropdown elements
        dropdownItems.forEach(el => {
            // get inner elements of each dropdown
            const select = el.querySelector('.select');
            const caret = el.querySelector('.caret');
            const menuDropdown = el.querySelector('.menu-dropdown');
            const selected = el.querySelector('.selected');
            const options = el.querySelectorAll('.menu-dropdown li');
            
            // click event for the select element
            select.addEventListener('click', () => {
                // add the styles to caret, and menu dropdown
                caret.classList.toggle('caret-rotate');
                menuDropdown.classList.toggle('menu-dropdown-open');
            });

            // iterate through all option elements
            options.forEach(option => {
                // click event for each option
                option.addEventListener('click', () => {
                    // remove styles to the select element, caret, 
                    // menu dropdown, and active class from all option elements
                    select.classList.remove('select-clicked');
                    caret.classList.remove('caret-rotate');
                    menuDropdown.classList.remove('menu-dropdown-open');
                    options.forEach(option => {
                        option.classList.remove('active');
                    });
                    // add active class to clicked option element
                    option.classList.add('active');
                    location.hash = option.getAttribute("data-lang");
	                location.reload();
                    
                });
            });
        });