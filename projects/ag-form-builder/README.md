# AG-FormBuilder

AG-FormBuilder is an Angular library for creating dynamic forms and interacting with them.

## Installation

Use the package manager NPM to install AG-FormBuilder.

```bash
npm i ag-form-builder
```

## Usage

#FormBuilder
import `AgFormBuilderModule` into your module
then you can use it in your template like bellow:
```
<lib-ag-form-builder (emittedForm)="handleFormInfo($event)"></lib-ag-form-builder>

```

#FormViewer
import `AgFormViewerModule` into your module
then you can use it in your template like bellow:
```
<lib-ag-form-viewer [formInfo]="mockForm" [dateLocale]="'en-US'" (emittedFormViewerInfo)="handleFormViewerInfo($event)"></lib-ag-form-viewer>
```
## Working Demo

You can find a working demo [here](https://angular-formbuilder.netlify.app/).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
