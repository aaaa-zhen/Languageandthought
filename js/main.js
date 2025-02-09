  // 暗黑模式切换
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // 初始化主题
  if (prefersDarkScheme.matches) {
      document.body.setAttribute('data-theme', 'dark');
  }

  // 监听系统主题变化
  prefersDarkScheme.addEventListener('change', (e) => {
      if (e.matches) {
          document.body.setAttribute('data-theme', 'dark');
      } else {
          document.body.removeAttribute('data-theme');
      }
  });

  themeToggle.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      if (currentTheme === 'dark') {
          document.body.removeAttribute('data-theme');
      } else {
          document.body.setAttribute('data-theme', 'dark');
      }
  });
