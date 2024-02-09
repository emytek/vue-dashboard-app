import { mount, createLocalVue } from '@vue/test-utils';
import DashboardWidget from '../views/widgets/WidgetsAnalytics.vue'; 
import axios from 'axios';

const localVue = createLocalVue();
localVue.prototype.$axios = axios; // Inject axios into the localVue

jest.mock('axios'); // Mock axios module

describe('DashboardWidget.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(DashboardWidget, {
      localVue,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    wrapper.destroy();
  });

  it('renders loading spinner when loading is true', async () => {
    wrapper.setData({ loading: true });

    await wrapper.vm.$nextTick();

    expect(wrapper.find('.loading-spinner').exists()).toBe(true);
  });

  it('renders widgets correctly when data is loaded', async () => {
    const mockData = {
      usersOnline: 10,
      usersActiveToday: 20,
      usersActiveThisMonth: 30,
      peakConcurrency: 5,
      dashboard: 1024,
    };

    axios.get.mockResolvedValueOnce({ data: { data: mockData } });

    await wrapper.vm.fetchData(); // Trigger fetching data

    expect(wrapper.find('.custom-widget')).toHaveLength(5); // Assuming you have 5 widgets
    expect(wrapper.find('.loading-spinner').exists()).toBe(false); // Loading spinner should be hidden
  });

  it('formats storage correctly', () => {
    // Test the formatStorage method for various cases
    expect(wrapper.vm.formatStorage(1024)).toBe('1.00GB');
    expect(wrapper.vm.formatStorage(1024 * 1024)).toBe('1.00MB');
    expect(wrapper.vm.formatStorage(500)).toBe('500B');
  });

  it('handles API error gracefully', async () => {
    axios.get.mockRejectedValueOnce(new Error('API error'));

    await wrapper.vm.fetchData(); // Trigger fetching data

    expect(wrapper.find('.loading-spinner').exists()).toBe(false); // Loading spinner should be hidden
    expect(wrapper.find('.custom-widget').exists()).toBe(false); // Widgets should not be rendered
  });
});
