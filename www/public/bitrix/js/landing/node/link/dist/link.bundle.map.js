{"version":3,"file":"link.bundle.map.js","names":["this","BX","Landing","exports","main_core","landing_ui_panel_link","Link","Node","constructor","options","super","trim","Utils","isPlainObject","isString","textToPlaceholders","create","escapeText","decodeDataValue","Block","apply","arguments","type","isGrouped","node","addEventListener","onClick","bind","isAllowInlineEdit","setAttribute","Loc","getMessage","onContentUpdate","blockId","getBlock","id","clearTimeout","contentEditTimeout","setTimeout","History","getInstance","push","Entry","block","selector","command","undo","startValue","redo","getValue","getField","setValue","isMenuMode","manifest","menuMode","event","preventDefault","stopPropagation","UI","Button","ColorAction","hideAll","Panel","StylePanel","isShown","link","PanelLink","show","isPrevented","target","data","preventSave","preventHistory","containsImage","field","hrefInput","text","includes","getPlaceholderData","href","then","placeholdersData","innerHTML","replace","RegExp","name","containsHtml","skipContent","attr","attrs","hasOwnProperty","removeAttribute","onChange","firstElementChild","tagName","value","getAttribute","preventAdjustValue","html","allowedTypes","Field","LinkUrl","TYPE_BLOCK","TYPE_PAGE","TYPE_CRM_FORM","TYPE_CRM_PHONE","Main","params","TYPE_STORE","TYPE_CATALOG","features","TYPE_DISK_FILE","title","content","siteId","site_id","landingId","makeDisplayedHrefValue","setHrefTypeSwitcherValue","getHrefStringType","removeHrefTypeFromHrefString","Ui"],"sources":["link.bundle.js"],"mappings":"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"}