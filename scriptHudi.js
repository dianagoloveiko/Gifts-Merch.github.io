function viewMaterial() {
    let elem = document.getElementById('material');
    let style = getComputedStyle(elem);
    if (style.display === 'none') {
        document.getElementById('material').style.display='block';
    } else if (style.display !== 'none') {
        document.getElementById('material').style.display='none';
    }
    }
    function viewOrder() {
    let elem = document.getElementById('Order');
    let style = getComputedStyle(elem);
    if (style.display === 'none') {
        document.getElementById('Order').style.display='block';
    } else if (style.display !== 'none') {
        document.getElementById('Order').style.display='none';
    }
    }
    function viewPrint() {
    let elem = document.getElementById('Print');
    let style = getComputedStyle(elem);
    if (style.display === 'none') {
        document.getElementById('Print').style.display='block';
    } else if (style.display !== 'none') {
        document.getElementById('Print').style.display='none';
    }
    }
    function viewCare() {
    let elem = document.getElementById('Care');
    let style = getComputedStyle(elem);
    if (style.display === 'none') {
        document.getElementById('Care').style.display='block';
    } else if (style.display !== 'none') {
        document.getElementById('Care').style.display='none';
    }
    }
    document.querySelector('.hudi_size').addEventListener('click', function() {
        this.classList.toggle('active');
    })
    document.querySelector('.hudi_size2').addEventListener('click', function() {
        this.classList.toggle('active');
    })
    document.querySelector('.hudi_size3').addEventListener('click', function() {
        this.classList.toggle('active');
    })
    document.querySelector('.hudi_size4').addEventListener('click', function() {
        this.classList.toggle('active');
    })
    document.querySelector('.hudi_size5').addEventListener('click', function() {
        this.classList.toggle('active');
    })
    document.querySelector('.choose_size').addEventListener('click', function() {
        document.querySelector('.table_size').classList.toggle('open');
    })