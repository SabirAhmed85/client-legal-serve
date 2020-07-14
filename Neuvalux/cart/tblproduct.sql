--
-- Table structure for table `tblproduct`
--

CREATE TABLE `tblproduct` (
  `id` int(8) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `price` double(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblproduct`
--

INSERT INTO `tblproduct` (`id`, `name`, `image`, `price`) VALUES
(1, 'FinePix Pro2 3D Camera', 'product-images/camera.jpg', 1500.00),
(2, 'EXP Portable Hard Drive', 'product-images/external-hard-drive.jpg', 800.00),
(3, 'Luxury Ultra thin Wrist Watch', 'product-images/watch.jpg', 300.00),
(4, 'XP 1155 Intel Core Laptop', 'product-images/laptop.jpg', 800.00);

--
-- Indexes for table `tblproduct`
--
ALTER TABLE `tblproduct`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblproduct`
--
ALTER TABLE `tblproduct`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

--
-- Table structure for table `tblcategory`
--

CREATE TABLE `tblcategory` (
  `id` int(8) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblproduct`
--

INSERT INTO `tblcategory` (`id`, `name`, `description`, `image`) VALUES
(1, 'Lounge', 'Insert Garden Furniture description', 'product-images/camera.jpg'),
(2, 'Living Room', 'Insert living room furniture description', 'product-images/external-hard-drive.jpg'),
(3, 'Garden Furniture', 'Insert Garden Furniture description', 'product-images/watch.jpg'),
(4, 'Kitchen', 'Insert kitchen furniture description', 'product-images/laptop.jpg');

--
-- Indexes for table `tblproduct`
--
ALTER TABLE `tblcategory`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `category_id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblproduct`
--
ALTER TABLE `tblcategory`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;