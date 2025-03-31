// postcss 插件 !todo 待添加

module.exports = function (options) {
	return {
		postcssPlugin: "postcss-calc",
		Once(root) {
			root.walkDecls((decl) => {
				if (decl.value.indexOf("calc") > -1) {
					decl.value = decl.value.replace(
						/calc\((.*)\)/g,
						function (match, p1) {
							return p1;
						}
					);
				}
			});
		},
	};
};
