// MyTable.spec.js
import { mount } from '@vue/test-utils';
import Table from '../components/UIComponents/FeatureTable.vue'

describe('MyTable.vue', () => {
  it('renders table headers and data correctly', async () => {
    // Mock your API response data
    const mockData = [
      { full_name: 'John Doe', message_sent: 10, media_storage_used: 1024, date_created: '2022-01-01', media_sent: 5 },
      // Add more mock data as needed
    ];

    // Mock the axios module to return your mock data
    jest.mock('axios', () => ({
      get: jest.fn(() => Promise.resolve({ data: { data: mockData } })),
    }));

    // Mount the component
    const wrapper = mount(MyTable);

    await wrapper.vm.$nextTick();

    // Check if table headers are rendered
    expect(wrapper.find('.thead').exists()).toBe(true);

    // Check if data is displayed in the table
    expect(wrapper.findAll('.tdata')).toHaveLength(mockData.length * 5); // 5 columns per row

    // Check if sorting works
    await wrapper.setData({ sortField: 'message_sent', sortOrder: 'desc' });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.asc').exists()).toBe(true); // Assuming you have a class to represent ascending order

    // Check if pagination buttons work
    await wrapper.setData({ currentPage: 2 });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.active').text()).toBe('2'); // Assuming you have a class for active pagination button
  });

  it('opens modal when clicking "More" button', async () => {
    const wrapper = mount(MyTable);

    // Mock your API response data
    const mockData = [{ full_name: 'John Doe', /* other properties */ }];

    // Mock the axios module to return your mock data
    jest.mock('axios', () => ({
      get: jest.fn(() => Promise.resolve({ data: { data: mockData } })),
    }));

    // Wait for data to be loaded
    await wrapper.vm.$nextTick();

    // Mock the method to open modal
    const openModalMock = jest.spyOn(wrapper.vm, 'openModal');

    // Click on the "More" button
    await wrapper.find('img').trigger('click');

    // Check if the method was called
    expect(openModalMock).toHaveBeenCalledWith(mockData[0]);
  });
});
