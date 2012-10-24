jQuery-Retina
=============

A jQuery plugin to automatically use retina images.

## Installation

Include script *after* the jQuery library:

    <script type="text/javascript" src="/path/to/jquery.retina.js"></script>

## Usage

Create appropriate HTML:

### Image Tag (<img>)

    <img src="/path/to/images/image.jpg" alt="" class="js-retina">

### CSS Background

    <style type="text/css">
        .bg {
            width:  500px;
            height: 350px;
            background-image: url("/img/image.jpg");
        }
    </style>
    <div class="bg js-retina"></div>

Create a jQuery selector to select the markup:

    $('.js-retina').retina();

OR

    $('img, .js-retina').retina();

## Options

### Filename Suffix

    suffix: '@2x'

Define the suffix to be added to the image URL for the retina version (i.e. image.jpg would become image@2x.jpg if the suffix were left at it's default. Default: `@2x`.

### Check if retina version of background-image CSS exists

    check: true

Define whether the plugin should check that the retina image exists on the server (checked via AJAX). This only applies to tags other than `<img>` with background-image CSS rule set. Default: `true`.

### Make retina plugin work whether on a retina device or not

    test: false

Define whether you want to swap images on non-retina devices or not (used mainly for testing). Default: `false`.

## Development

- Source hosted at [GitHub](https://github.com/atwright147/jquery-retina)
- Report issues, questions, feature requests on [GitHub Issues](https://github.com/atwright147/jquery-retina/issues)

Pull requests are very welcome! Make sure your patches are well tested. Please create a topic branch for every separate change you make.

## Authors

[Andy Wright](https://github.com/atwright147)

*This readme is based on the readme by carhartl for his jquery-cookie plugin*