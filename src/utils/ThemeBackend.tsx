function pullThemes(): Record<string, Record<string, string>> {
    const themeList: Record<string, Record<string, string>> = {};

    for (const sheet of Array.from(document.styleSheets)) {
        let rules: CSSRuleList;
        try {
            rules = sheet.cssRules;
        } catch (e) {
            continue; // cross-origin stylesheet, skip it
        }

        for (const rule of Array.from(rules)) {
            if (rule instanceof CSSStyleRule && rule.selectorText.startsWith('.themes')) {
                const name = rule.selectorText.replace('.themes', '');
                const vars: Record<string, string> = {};

                for (let i = 0; i < rule.style.length; i++) {
                    const prop = rule.style.item(i); // e.g. "--bg"
                    if (prop.startsWith('--')) {
                        vars[prop] = rule.style.getPropertyValue(prop).trim();
                    }
                }

                themeList[name] = vars;
            }
        }
    }

    return themeList;
}

export default pullThemes