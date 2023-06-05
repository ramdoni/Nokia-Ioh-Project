/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class Shu extends React.Component{
    render(){
        return (
            <div className="hk-pg-wrapper pb-0">
                <div className="hk-pg-body py-0">
                    <div className="fmapp-wrap fmapp-sidebar-toggle">
                        <nav className="fmapp-sidebar">
                            <div data-simplebar className="nicescroll-bar">
                                <div className="menu-content-wrap">
                                    <div className="btn btn-primary btn-rounded btn-block btn-file mb-4">
                                        Upload
                                        <input type="file" className="upload" />
                                    </div>
                                    <div className="menu-group">
                                        <ul className="nav nav-light navbar-nav flex-column">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="{void(0)}">
                                                    <span className="nav-icon-wrap"><span className="feather-icon"><i data-feather="hard-drive"></i></span></span>
                                                    <span className="nav-link-text">My Space</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="{void(0)}">
                                                    <span className="nav-icon-wrap"><span className="feather-icon"><i data-feather="file"></i></span></span>
                                                    <span className="nav-link-text">All Files</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="{void(0)}">
                                                    <span className="nav-icon-wrap"><span className="feather-icon"><i data-feather="folder"></i></span></span>
                                                    <span className="nav-link-text">Folders</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="{void(0)}">
                                                    <span className="nav-icon-wrap"><span className="feather-icon"><i data-feather="upload"></i></span></span>
                                                    <span className="nav-link-text">Shared</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="{void(0)}">
                                                    <span className="nav-icon-wrap"><span className="feather-icon"><i data-feather="star"></i></span></span>
                                                    <span className="nav-link-text">Starred</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="{void(0)}">
                                                    <span className="nav-icon-wrap"><span className="feather-icon"><i data-feather="trash-2"></i></span></span>
                                                    <span className="nav-link-text">Trash</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="separator separator-light"></div>
                                    <div className="menu-group">
                                        <ul className="nav nav-light navbar-nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="{void(0)}">
                                                    <span className="nav-icon-wrap"><span className="feather-icon"><i data-feather="image"></i></span></span>
                                                    <span className="nav-link-text">Images</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="{void(0)}">
                                                    <span className="nav-icon-wrap"><span className="feather-icon"><i data-feather="video"></i></span></span>
                                                    <span className="nav-link-text">Videos</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="{void(0)}">
                                                    <span className="nav-icon-wrap"><span className="feather-icon"><i data-feather="play"></i></span></span>
                                                    <span className="nav-link-text">Audio</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="{void(0)}">
                                                    <span className="nav-icon-wrap"><span className="feather-icon"><i data-feather="file-text"></i></span></span>
                                                    <span className="nav-link-text">Documents</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="fmapp-storage">
                                <p className="p-sm">Storage is 85% full. 78.5 GB of 1 TB used. You can buy more space.</p>
                                <div className="progress-lb-wrap my-2">
                                    <label className="progress-label text-uppercase fs-8 fw-medium">78.5 GB of 1 TB</label>
                                    <div className="progress progress-bar-rounded progress-bar-xs">
                                        <div className="progress-bar bg-danger w-85" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <a href="#" className="fs-7"><u>Buy Storage</u></a>
                            </div>
                            <div className="fmapp-fixednav">
                                <div className="hk-toolbar">
                                    <ul className="nav nav-light">
                                        <li className="nav-item nav-link">
                                            <a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Settings" href="#"><span className="icon"><span className="feather-icon"><i data-feather="settings"></i></span></span></a>
                                        </li>
                                        <li className="nav-item nav-link">
                                            <a href="#" className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Archive"><span className="icon"><span className="feather-icon"><i data-feather="archive"></i></span></span></a>
                                        </li>
                                        <li className="nav-item nav-link">
                                            <a href="#" className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Help"><span className="icon"><span className="feather-icon"><i data-feather="book"></i></span></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="fmapp-content">
                            <div className="fmapp-detail-wrap">
                                <header className="fm-header">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <a className="fmapp-title dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                            <h1>SHU</h1>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><i data-feather="file"></i></span><span>All Files</span></a>
                                            <a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><i data-feather="file-plus"></i></span><span>Synced Files</span></a>
                                            <a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><i data-feather="upload-cloud"></i></span><span>Cloud Document</span></a>
                                        </div>
                                        <form className="mx-3 flex-grow-1 mw-400p" role="search">
                                            <input type="text" className="form-control" placeholder="Search files and folders" />
                                        </form>
                                    </div>
                                    <div className="fm-options-wrap">	
                                        <a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover disabled d-xl-inline-block d-none" href="#" ><span className="icon"><span className="feather-icon"><i data-feather="user-plus"></i></span></span></a>
                                        <a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover fmapp-info-toggle" href="#" ><span className="icon"><span className="feather-icon"><i data-feather="info"></i></span></span></a>
                                        <div className="v-separator d-xl-inline-block d-none"></div>
                                        <a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover ms-0 d-xl-inline-block d-none" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add New Folder"><span className="icon"><span className="feather-icon"><i data-feather="folder-plus"></i></span></span></a>
                                        <a className="btn btn-icon btn-flush-dark btn-rounded btn-file flush-soft-hover  d-md-inline-block d-none" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Upload"><span className="icon"><span className="feather-icon"><i data-feather="upload-cloud"></i></span></span></a>
                                        <div className="v-separator d-lg-inline-block d-none"></div>
                                        <a className="btn btn-icon btn-flush-dark flush-soft-hover dropdown-toggle no-caret active ms-lg-0 d-sm-inline-block d-none" href="#" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="list"></i></span></span></a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="file-manager-list.html"><span className="feather-icon dropdown-icon"><i data-feather="list"></i></span><span>List View</span></a>
                                            <a className="dropdown-item active" href="file-manager-grid.html"><span className="feather-icon dropdown-icon"><i data-feather="grid"></i></span><span>Grid View</span></a>
                                        </div>
                                        <a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-lg-inline-block d-none" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Collapse">
                                            <span className="icon">
                                                <span className="feather-icon"><i data-feather="chevron-up"></i></span>
                                                <span className="feather-icon d-none"><i data-feather="chevron-down"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="hk-sidebar-togglable active"></div>
                                </header>
                                <div className="fm-body">
                                    <div data-simplebar className="nicescroll-bar">
                                        <div className="file-list-view">
                                            <ul className="nav nav-tabs nav-line nav-icon nav-light">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-bs-toggle="tab" href="#cloud_doc">
                                                        <span className="nav-link-text">Cloud Documents</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-bs-toggle="tab" href="#">
                                                        <span className="nav-link-text">Shared with me</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shu;