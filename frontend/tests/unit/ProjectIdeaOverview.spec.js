import {
  shallowMount
} from '@vue/test-utils'
import ProjectOverview from '@/pages/ProjectOverview.vue';

describe('ProjectOverview.vue', () => {
  it('mounts and renders h1', () => {
    const wrapper = shallowMount(ProjectOverview);
    expect(wrapper.find('h1.md-headline').text()).toMatch("Öffentliche Projekte");
  });
})