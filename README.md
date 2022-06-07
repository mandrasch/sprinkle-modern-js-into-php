Just experimental.

Goal: Compare page weight and developer experience for usage of modern js solutions in PHP templates. I want to sprinkle in interactive components into 'classical' PHP CMSes such as Statamic, typo3, etc.

- `ddev start`
- `ddev launch`

To build the experiments, you need to run

- `npm install`
- `npm run build`

in each directory first.

Each directory has it's own README.md

Resources: See folders for experiments

## TODOs

- [ ] https://github.com/tyler36/ddev-browsersync#laravel-mix-configuration
- [ ] Add https://laravel.com/docs/9.x/mix#versioning-and-cache-busting, Laravel has own `mix()` blade directive. Does it just read contents of `mix-manifest.json` (js and css value)? According to https://laravel-mix.com/docs/6.0/versioning#laravel-users it seems so.
