import { useCssEditor } from '../css-editor-provider';
import style from './central-pane.module.css';

export function CentralPane() {

  const { cssEditor } = useCssEditor();

  return (
    <div 
      className={style.container}>
      <iframe
        className={style.iframe}
        srcDoc={`
          <!doctype html>
          <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <title>RevenueHunt</title>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
              <style>${cssEditor.css}</style>
            </head>
            <body>
              <section class="d-flex gap-4 flex-column align-items-center justify-content-center section p-4">
                <h2 class="title">Lorem ipsum dolor sit amet</h2>
                <p class="description">Consectetur adipiscing elit, sed do eiusmod tempor incididunt u</p>
                <button type="button" class="btn btn-primary btn-lg button">Est laborum</button>
              </section>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </body>
          </html>
        `}/>
    </div>
  );
}
