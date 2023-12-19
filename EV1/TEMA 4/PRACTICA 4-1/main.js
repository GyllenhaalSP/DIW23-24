document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropdown-item').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetAccordionHeader = document.querySelector(targetId).parentElement.querySelector('.accordion-header button');

            // Cerrar todos los acordeones
            document.querySelectorAll('.accordion-item .collapse').forEach(function(collapse) {
                collapse.classList.remove('show');
            });

            document.querySelectorAll('.accordion-header button').forEach(function(button) {
                button.classList.add('collapsed');
                button.setAttribute('aria-expanded', "false");
            });

            // Abrir el acordeón objetivo
            if (targetAccordionHeader) {
                targetAccordionHeader.classList.remove('collapsed');
                targetAccordionHeader.setAttribute('aria-expanded', "true");
            }

            const targetAccordion = document.querySelector(targetId);

            if (targetAccordion) {
                targetAccordion.classList.add('show');
            }
        });
    });
});
