import React, { useState } from 'react';

const TestDropdown = () => {
  const [category, setCategory] = useState('');
  const [subOption, setSubOption] = useState('');
  const [dependentOptions, setDependentOptions] = useState([]);

  // Function to get sub-options based on category
  const getSubSelections = (type) => {
    switch (type) {
      case 'refrigerators':
        return ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
      case 'televisions':
        return ['TV Option A', 'TV Option B'];
      default:
        return [];
    }
  };

  // Function to get dependent options based on sub-option
  const getDependentOptions = (subOption) => {
    switch (subOption) {
      case 'Option 1':
        return ['Option 1.1', 'Option 1.2', 'Option 1.3'];
      case 'Option 2':
        return ['Option 2.1', 'Option 2.2'];
      case 'TV Option A':
        return ['A1', 'A2'];
      default:
        return [];
    }
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubOption('');
    setDependentOptions([]); // Reset dependent options
  };

  // Handle sub-option change
  const handleSubOptionChange = (e) => {
    const selectedSubOption = e.target.value;
    setSubOption(selectedSubOption);
    setDependentOptions(getDependentOptions(selectedSubOption));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📋 Nested Dropdown Example</h2>

      {/* Category Dropdown */}
      <label>Category: </label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        <option value="refrigerators">Refrigerators</option>
        <option value="televisions">Televisions</option>
      </select>

      {/* Sub-options Dropdown */}
      {category && (
        <>
          <br /><br />
          <label>Sub-Options: </label>
          <select value={subOption} onChange={handleSubOptionChange}>
            <option value="">Select Option</option>
            {getSubSelections(category).map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Dependent Options Dropdown */}
      {subOption && dependentOptions.length > 0 && (
        <>
          <br /><br />
          <label>Dependent Options: </label>
          <select>
            <option value="">Select Dependent Option</option>
            {dependentOptions.map((depOption, index) => (
              <option key={index} value={depOption}>
                {depOption}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default TestDropdown;
