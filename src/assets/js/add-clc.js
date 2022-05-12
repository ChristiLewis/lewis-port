const $addFeatureBtn = document.querySelector('#add-feature');
const $clcForm = document.querySelector('#clc-form');
const $customFeaturesList = document.querySelector('#custom-features-list');

const handleAddFeature = event => {
    event.preventDefault();

    const featureValue = document.querySelector('#new-feature').value;

    if (!featureValue) {
        return false;
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'feature';
    checkbox.value = featureValue;
    checkbox.id = featureValue
        .toLowerCase()
        .split(' ')
        .join('-');

    const label = document.createElement('label');
    label.textContent = featureValue;
    label.htmlFor = featureValue
        .toLowerCase()
        .split(' ')
        .join('-');

    const divWrapper = document.createElement('div');

    divWrapper.appendChild(checkbox);
    divWrapper.appendChild(label);
    $customFeaturesList.appendChild(divWrapper);

    featureValue.value = '';
};

const handleClcSubmit = event => {
    event.preventDefault();

    const clcName = $clcForm.querySelector('#clc-name').value;
    const createdBy = $clcForm.querySelector('#created-by').value;
    const size = $clcForm.querySelector('#clc-size').value;
    const features = [...$clcForm.querySelectorAll('[name=feature]:checked')].map(feature => {
        return feature.value;
    });

    if (!clcName || !createdBy || !features.length) {
        return;
    }

    const formData = { clcName, createdBy, size, features };

    fetch('/api/clcs', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(postResponse => {
            alert('CLC created successfully!');
            console.log(postResponse);
        })
        //UPDATED FOR INDEXEDDB
        .catch(err => {
            console.log(err);
            saveRecord(formData);
        });
};

$clcForm.addEventListener('submit', handleClcSubmit);
$addFeatureBtn.addEventListener('click', handleAddFeature);
