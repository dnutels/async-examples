(function app($) {
    $(() => {
        $('[data-type]').on('click', (event) => {
            const {num} = event.target.dataset;

            $.get(`/api/create-customer-order?num=${num}`, (data) => {
                console.log(data);
            });
        });
    });
}(jQuery));
