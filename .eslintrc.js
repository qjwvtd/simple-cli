module.exports = {
    root: true, // 作用的目录是根目录
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: false,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        }
    },
    plugins: ["@typescript-eslint", "react", "html", "react-hooks"],
    env: {
        browser: true, // 开发环境配置表示可以使用浏览器的方法
        node: true, //
        es6: true
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    // extends: ["plugin:@typescript-eslint/recommended"],
    rules: {
        'no-var': 'error',
        //禁止出现多余的分号,如:const a = 1;;
        'no-extra-semi': 'error',
        //局部变量可以不用const申明，比如for(let i ...){}
        'prefer-const': 'off',
        //arguments参数必须解构后使用，不能直接使用,function(...args){}
        'prefer-rest-params': 'off',
        'import/extensions': 'off',
        'linebreak-style': [0, 'error', 'windows'],
        'indent': ['error', 4, { SwitchCase: 1 }],
        //强制正确的分号结尾
        'semi': ['error', 'always'],
        'comma-dangle': [2, 'never'],
        //分号必须写在行尾，禁止在行首出现
        'semi-style': ['error', 'last'],
        // 禁止空格和 tab 的混合缩进
        'no-mixed-spaces-and-tabs': 1,
        // 禁用 debugger
        'no-debugger': 1,
        //不能有声明后未被使用的变量或参数
        "no-unused-vars": "error",
        // //防止在JSX中使用的变量被错误地标记为未使用
        "react/jsx-uses-vars": 2,
        // //防止react组件被错误地标记为未使用
        "react/jsx-uses-react": 2,
        // // 检查 Hook 的规则
        "react-hooks/rules-of-hooks": "error",
        //未定义前不能使用
        'no-use-before-define': 'error',
        'no-sparse-arrays': 'error',
        //是否禁止console
        'no-console': 'off',
        //禁止使用undefined
        // "no-undefined": 2,
        //不能有未定义的变量
        'no-undef': 2,
        //块语句中的内容不能为空
        'no-empty': 2,
        //在创建对象字面量时不允许键重复 {a:1,a:1}
        'no-dupe-keys': 2,
        //禁止修改const声明的变量
        'no-const-assign': 2,
        //禁用with
        'no-with': 2,
        //new时必须加小括号
        'new-parens': 2,
        // 使用 === 替代 ==
        'eqeqeq': [2, 'allow-null'],
        // 控制逗号前后的空格
        'comma-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        //禁止行尾有空格
        'no-trailing-spaces': 'error',
        //if 后面必须要有 {，除非是单行 if
        'curly': ['error', 'multi-line', 'consistent'],
        //在return,throw,continue,break之后出现代码告警
        'no-unreachable': 'warn',
        //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
        'no-shadow': 2,
        //调用函数时,函数名与()之间不能有空格
        'no-spaced-func': 2,
        //不能直接调用对象的hasOwnProperty方法,而是Object.prototype.hasOwnProperty.call(obj, propName);
        'no-prototype-builtins': 'off',
        // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
        'typescript/class-name-casing': 'off',
        //可以使用require()引入commonjs的变量或模块
        '@typescript-eslint/no-var-requires': 'off',
        //可以将Function用作定义类型
        '@typescript-eslint/ban-types': 'off',
        //不限制any的使用
        '@typescript-eslint/no-explicit-any': 'off',
        //关闭函数返回类型检查
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        //禁止interface是空对象
        '@typescript-eslint/no-empty-interface': 'off',
        //ts代码缩进
        '@typescript-eslint/indent': ['error', 4],
        //禁止this别名
        '@typescript-eslint/no-this-alias': 'off'
    }
};
