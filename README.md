# ritvi-apps.github.io — redirect to ritesh-firodiya.github.io

The Ritvi Apps site has been folded into
**<https://ritesh-firodiya.github.io/products/>**, which carries every app with
its real monetization model and price.

`index.html` is a redirect page: 200, `rel=canonical`, meta refresh, and a
visible link for anything that does not run scripts.

## Before deleting this

Nothing in the app repos points at this bare root — the store configs all
reference `ritvi-apps.github.io/legal/`, which is a **separate repository**
(`ritvi-apps/legal`) and must be kept alive permanently.

However, the **developer website field on the Play developer account** may point
here, and AdMob only honours `app-ads.txt` on the domain named in that field.
Tic Tac Toe carries ads. Before removing this repo, confirm that field has been
moved and that `ritesh-firodiya.github.io/app-ads.txt` is being read.

`.context/designs/` is the design set for the version of this site that was
never shipped. Kept for the record; superseded by the design set in the
ritesh-firodiya.github.io repo.

## Deploy

GitHub Pages, branch `main`, root. No build step.
