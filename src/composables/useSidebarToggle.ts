export default function useSidebarToggle() {
  const sidebar = ref<HTMLElement | null>(null);
  const sidebarToggler = ref<HTMLElement | null>(null);

  const toggleSidebar = () => {
    sidebar.value?.classList.toggle('d-none');
    Array.from(sidebarToggler.value?.children ?? []).forEach((child: Element) => {
      child.classList.toggle('bi-arrow-left-circle-fill');
      child.classList.toggle('bi-arrow-right-circle-fill');
    });
  };

  onMounted(() => {
    sidebarToggler.value?.addEventListener('click', toggleSidebar);
  });

  onUnmounted(() => {
    sidebarToggler.value?.removeEventListener('click', toggleSidebar);
  });

  return { sidebar, sidebarToggler };
}